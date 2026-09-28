import Image from "next/image";
import Link from "next/link";
import {  siteName } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
     

      <p >All rights reserved by {siteName} |  <span style={{ fontSize: '14px' }} >  A sister concern of <a href="https://www.dos.com.bd/" target="_blank" style={{
      color: '#0066CC',
      fontWeight: 600,
      textDecoration: 'none',
    }} >  DOS GROUP</a> </span> </p>
    </footer>
  );
}
