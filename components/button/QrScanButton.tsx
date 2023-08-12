import { Container, Fab, Tooltip, Typography } from "@mui/material";
import { QrCode2 } from "@mui/icons-material";
import styled from "styled-components";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { message } from "antd";
import { Alert } from "@material-ui/lab";

const AnimatedFab = styled(Fab)`
  background-color: #d3af37;
  animation: bounce 1s;
  animation-iteration-count: 5;
  @keyframes bounce {
    0% {
      transform: rotate(0deg) translateX(0);
    }
    50% {
      transform: rotate(10deg) translateX(10px);
    }
    100% {
      transform: rotate(0deg) translateX(0);
    }
  }

  &:hover {
    animation: none;
    background-color: #d3af37;
  }
`;

const ButtonFloat = styled.div``;
export default function QrScanButton() {
  const [data, setData] = useState("");
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false) as any;

  return (
    <Container>
      <Tooltip title="Scan QR Code" placement="top">
        <AnimatedFab
          className="fab__button"
          color="primary"
          aria-label="Scan QR Code"
          href="#scan"
          onClick={() => {
            setOpen(!open);
            setData("");
            setError(false);
          }}
        >
          <QrCode2
            sx={{
              color: "#010b13",
            }}
          />
        </AnimatedFab>
      </Tooltip>
      {open && !data && (
        <div>
          {error && (
            <Alert
              style={{
                marginTop: "20px",
                marginBottom: "-150px",
              }}
              severity="error"
            >
              {error}
            </Alert>
          )}
          <QrReader
            onResult={(result: any, error) => {
              if (!!result) {
                setData(result?.text);
                setError(false);
              }
              if (!!error) {
                setError(
                  "An error occurred while scanning the QR Code. Please check the image and that the camera is enabled."
                );
              }
            }}
            constraints={{ facingMode: "environment" }}
          />
        </div>
      )}
      {data && (
        <Typography
          align="center"
          sx={{
            marginTop: "20px",
          }}
          component={"div"}
        >
          {data}
        </Typography>
      )}
    </Container>
  );
}
