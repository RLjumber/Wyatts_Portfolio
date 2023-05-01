"use client";
import styles from "./type.module.css";
import { useState, useEffect } from "react";

export default function Type() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stringsToType, setStringsToType] = useState([
    '...3D Modeler',
    '...SCAD Student',
    '...Multimedia Artist'
  ]);
  const [stringIndex, setStringIndex] = useState(0);

  const typeSpeed = 200;
  const deleteSpeed = 50;

  useEffect(() => {
    const currentString = stringsToType[stringIndex];

    const interval = setInterval(() => {
      if (isDeleting) {
        setText(currentString.substring(0, index - 1));
        setIndex(index => index - 1);
      } else {
        setText(currentString.substring(0, index + 1));
        setIndex(index => index + 1);
      }

      if (index === currentString.length + 1) {
        setIsDeleting(true);
      }

      if (index === 0) {
        setIsDeleting(false);
        setStringIndex(index => (index + 1) % stringsToType.length);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearInterval(interval);
  }, [index, isDeleting, stringsToType, stringIndex]);

  return <h3 className={styles.professions}>{text}<div className={styles.cursor}></div></h3>;
}
