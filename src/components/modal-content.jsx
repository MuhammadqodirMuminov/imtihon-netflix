import { Box, Typography } from '@mui/material';
import React from 'react'

const ModalContent = ({user}) => {
  return (
		<Box
			sx={{
				position: "absolute",
				backgroundColor: "#000",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				border: "2px solid #000",
				boxShadow: "-4px 1px 41px 4px rgba(245,245,245,0.25);",
				p: 4,
				width: "600px",
				borderRadius: "4px",
			}}>
			<Box
				sx={{
					display: "flex",
					gap: "40px",
					alignItems: "center",
				}}>
				<img
					width={"200px"}
					style={{ borderRadius: "50%" }}
					src={user?.image}
					alt="person"
				/>

				<Typography
					id="modal-modal-title"
					variant="h2"
					sx={{ color: "white" }}
					component="h2">
					{user?.username}
				</Typography>
			</Box>

			<Typography
				id="modal-modal-description"
				sx={{ mt: 2, color: "white" }}>
				Bio: <span>{user?.bio}</span>
			</Typography>

			<Typography
				id="modal-modal-description"
				sx={{ mt: 2, color: "white" }}>
				Email: <span>{user?.email}</span>
			</Typography>
		</Box>
  );
}

export default ModalContent