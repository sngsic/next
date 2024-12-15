// Home Component
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", fontSize:100,display: "block", textAlign: "center" }}>My website</h1> {/* Explicitly set text color to white */}
      <Link href="/home" style={{ color: "white",fontSize:50,display: "block", textAlign: "center"  }}>HOME</Link> <br />
      <Link href="/AboutUs" style={{ color: "white",fontSize:50,display: "block", textAlign: "center"  }}>About Us</Link> <br /> {/* Fixed the href */}
      <Link href="/services" style={{ color: "white",fontSize:50,display: "block", textAlign: "center"  }}>Services</Link> <br />
      <Link href="/Contact" style={{ color: "white",fontSize:50,display: "block", textAlign: "center"  }}>Contact</Link> <br />
      <Link href="/support" style={{ color: "white",fontSize:50,display: "block", textAlign: "center"  }}>Support</Link> <br />
      <Link href="/careers" style={{ color: "white",fontSize:50,display: "block", textAlign: "center"  }}>Careers</Link> <br />
    </main>
  );
}
