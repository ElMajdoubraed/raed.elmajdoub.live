import Head from "next/head";
import { Code } from "@nextui-org/react";
import React from "react";
import { Container } from "@mui/material";

export default function Qr() {
  return (
    <>
      <Head>
        <title>QR Code Generator | Create Your Free QR Codes</title>
        <meta
          name="description"
          content="Free QR Code Generator and online QR code creator. No sign-up required. Create unlimited non-expiring free QR codes."
        />
        <meta
          name="keywords"
          content="QR Code Generator, QR Code, QR Code Creator, Free QR Code, Free QR Code Generator, QR Code Generator Free, QR Code Generator Online, QR Code Generator Free Online, QR Code Generator Free Download, QR Code Generator Free Download For Pc, QR Code Generator Free Download For Windows 10, QR Code Generator Free Download For Windows 7, QR Code Generator Free Download For Windows 8, QR Code Generator Free Download For Windows 8.1, QR Code Generator Free Download For Windows Xp, QR Code Generator Free Download For Windows Vista, QR Code Generator Free Download For Windows 32 Bit, QR Code Generator Free Download For Windows 64 Bit, QR Code Generator Free Download For Windows 86 Bit, QR Code Generator Free Download For Windows 64 Bit, QR Code Generator Free Download For Windows 86 Bit, QR Code Generator Free Download For Windows 32 Bit, QR Code Generator Free Download For Windows 10 64 Bit, QR Code Generator Free Download For Windows 10 32 Bit"
        />
      </Head>
      <Container>
        {`
          import { QrScanButton } from "@/components/button";
        import { Container, Grid, Typography, Skeleton, Stack } from "@mui/material";
import Head from "next/head";
import React from "react";
import { useQRCode } from "next-qrcode";
import $ from "jquery";
import { message } from "antd";
export default function Qr() {
  const { Canvas } = useQRCode();
  const downloadQRCode = () => {
    try {
      const canvas: any = $("canvas")[0];
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink: any = $("<a>")[0];
      downloadLink.href = pngUrl;
      downloadLink.download = "qr-code.png";
      $("body").append(downloadLink);
      downloadLink.click();
      $(downloadLink).remove();
    } catch (error) {
      message.error("Error while downloading QR Code");
    }
  };
  const [qr, setQr] = React.useState("");
  const [primary, setPrimary] = React.useState("#d3af37");
  const [secondary, setSecondary] = React.useState("#010b13");

  return (
    <>
      <Head>
        <title>QR Code Generator | Create Your Free QR Codes</title>
        <meta
          name="description"
          content="Free QR Code Generator and online QR code creator. No sign-up required. Create unlimited non-expiring free QR codes."
        />
        <meta
          name="keywords"
          content="QR Code Generator, QR Code, QR Code Creator, Free QR Code, Free QR Code Generator, QR Code Generator Free, QR Code Generator Online, QR Code Generator Free Online, QR Code Generator Free Download, QR Code Generator Free Download For Pc, QR Code Generator Free Download For Windows 10, QR Code Generator Free Download For Windows 7, QR Code Generator Free Download For Windows 8, QR Code Generator Free Download For Windows 8.1, QR Code Generator Free Download For Windows Xp, QR Code Generator Free Download For Windows Vista, QR Code Generator Free Download For Windows 32 Bit, QR Code Generator Free Download For Windows 64 Bit, QR Code Generator Free Download For Windows 86 Bit, QR Code Generator Free Download For Windows 64 Bit, QR Code Generator Free Download For Windows 86 Bit, QR Code Generator Free Download For Windows 32 Bit, QR Code Generator Free Download For Windows 10 64 Bit, QR Code Generator Free Download For Windows 10 32 Bit"
        />
      </Head>
      <section>
        <h5>Qr Code Generator - Scanner</h5>
        <h2>Qr Code</h2>
        <Container
          maxWidth="md"
          sx={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "10px",
            marginBottom: "20px",
          }}
        >
          <Grid container spacing={2}>
            <Grid
              sx={{
                padding: "20px",
              }}
              item
              xs={12}
              md={9}
            >
              <Typography variant="h6">Create Qr Code</Typography>
              <input
                style={{
                  marginTop: "2rem",
                  marginBottom: "1rem",
                }}
                onChange={(e) => setQr(e.target.value)}
                className="input"
                id="qr-code"
                type="text"
                placeholder="Enter your text"
              />
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  marginBottom: "2rem",
                }}
              >
                <input
                  type="color"
                  value={primary}
                  onChange={(e) => setPrimary(e.target.value)}
                  id="primary"
                  name="primary color"
                />
                <input
                  type="color"
                  id="secondary"
                  value={secondary}
                  onChange={(e) => setSecondary(e.target.value)}
                  name="secondary color"
                />
              </Stack>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6">Qr Code</Typography>
              {!qr ? (
                <Skeleton
                  height={200}
                  sx={{
                    backgroundColor: "#ccc",
                  }}
                />
              ) : (
                <>
                  <div
                    style={{
                      marginBottom: "1rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Canvas
                      text={qr}
                      options={{
                        width: 200,
                        type: "image/jpeg",
                        quality: 0.3,
                        margin: 3,
                        scale: 4,
                        color: {
                          dark: primary,
                          light: secondary,
                        },
                      }}
                    />
                  </div>
                  <button id="button__a" onClick={downloadQRCode}>
                    Download
                  </button>
                </>
              )}
            </Grid>
            <Grid
              sx={{
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
              item
              xs={12}
            >
              <QrScanButton />
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
}

          `
          .split("\n")
          .map((line: string) => {
            return (
              <>
                <code color="secondary">{line}</code>
                <br />
              </>
            );
          })}
      </Container>
    </>
  );
}
