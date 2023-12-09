import React from "react";

const AboutUsPage = () => {
	return (
		<div style={styles.container}>
			<h1 style={styles.header}>About Us</h1>
			<p style={styles.paragraph}>
				Welcome to our world of coding and creativity! We are Reyab and
				David, two high school enthusiasts with a shared passion for
				programming. Our journey began in a computer science class,
				where we quickly discovered our mutual interest in developing
				innovative solutions to real-world problems. Reyab, with his
				keen eye for detail and love for structured programming,
				complements David’s creative approach and flair for intuitive
				design. Together, we embark on exciting projects, ranging from
				mobile apps to web development, each crafted with the goal of
				making technology accessible and fun for everyone. Join us as we
				continue to explore the vast universe of coding, one line at a
				time!
			</p>
		</div>
	);
};

const styles = {
	container: {
		textAlign: "center",
		padding: "50px",
		backgroundColor: "#f0f0f0", // Light grey background for the entire section
		borderRadius: "15px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
		margin: "20px",
	},
	header: {
		color: "#333", // Dark text color for the header
		marginBottom: "20px", // Spacing below the header
	},
	paragraph: {
		color: "#555", // Slightly lighter text color for the paragraph
		fontSize: "18px", // Larger font size for readability
		lineHeight: "1.6", // Line height for better readability
	},
};

export default AboutUsPage;
