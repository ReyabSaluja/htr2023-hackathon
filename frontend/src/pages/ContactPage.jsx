import React from "react";

const ContactPage = () => {
	return (
		<div style={styles.container}>
			<h1 style={styles.header}>Contact Us</h1>
			<p style={styles.paragraph}>
				Got a question or want to work on a project with us? Reach out!
			</p>
			<div style={styles.contactInfo}>
				<div style={styles.profile}>
					<h2 style={styles.name}>Reyab</h2>
					<a
						href={`https://github.com/ReyabSaluja`}
						target="_blank"
						style={styles.link}
					>
						ReyabSaluja
					</a>
				</div>
				<div style={styles.profile}>
					<h2 style={styles.name}>David</h2>
					<a
						href={`https://github.com/vicdenz`}
						target="_blank"
						style={styles.link}
					>
						vicdenz
					</a>
				</div>
			</div>
		</div>
	);
};

const styles = {
	container: {
		textAlign: "center",
		padding: "50px",
		backgroundColor: "#f0f0f0",
		borderRadius: "15px",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
		margin: "20px",
	},
	header: {
		color: "#333",
		marginBottom: "20px",
	},
	paragraph: {
		color: "#555",
		fontSize: "18px",
		lineHeight: "1.6",
		marginBottom: "30px",
	},
	contactInfo: {
		display: "flex",
		justifyContent: "center",
		gap: "40px",
	},
	profile: {
		textAlign: "left",
	},
	name: {
		color: "#333",
		marginBottom: "10px",
	},
	link: {
		color: "#1877F2", // Facebook-blue color for the link
		textDecoration: "none",
		fontSize: "16px",
	},
};

export default ContactPage;
