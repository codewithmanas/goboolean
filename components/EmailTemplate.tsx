// import Image from 'next/image';
import * as React from 'react';


export const EmailTemplate = () => (
    <div
      style={{
        backgroundColor: '#ffffff',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        padding: "16px"
      }}
    >
      <table
        align="center"
        width="100%"
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={{
          maxWidth: '37.5em',
          margin: '0 auto',
          padding: '20px 0 48px',
        }}
      >
        <tbody>
          <tr style={{ width: '100%' }}>
            <td>
              {/* <Image
                alt="Koala"
                height="50"
                src="https://react-email-demo-k6qpz0pxq-resend.vercel.app/static/koala-logo.png"
                width="170"
                style={{
                  display: 'block',
                  outline: 'none',
                  border: 'none',
                  textDecoration: 'none',
                  margin: '0 auto',
                }}
              /> */}
              <p style={{ fontSize: '32px', lineHeight: '26px', margin: '16px 0' }}>
                Hi there,
              </p>
              <p style={{ fontSize: '16px', lineHeight: '26px', margin: '16px 0' }}>
                Thank you for being a part of the GoBoolean community. We{`'re`} constantly working to improve your experience and provide valuable content.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '26px', margin: '16px 0' }}>
                We{`'re`} excited to share a new feature with you in future. Check out the link below to know more about the platform.
              </p>
              <table
                align="center"
                width="100%"
                cellPadding="0"
                cellSpacing="0"
                role="presentation"
                style={{ textAlign: 'center' }}
              >
                <tbody>
                  <tr>
                    <td>
                      <a
                        href="https://goboolean.in"
                        style={{
                          lineHeight: '100%',
                          textDecoration: 'none',
                          display: 'block',
                          maxWidth: '100%',
                          backgroundColor: '#5F51E8',
                          borderRadius: '3px',
                          color: '#fff',
                          fontSize: '16px',
                          textAlign: 'center',
                          padding: '12px',
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          style={{
                            maxWidth: '100%',
                            display: 'inline-block',
                            lineHeight: '120%',
                          }}
                        >
                          Explore
                        </span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p style={{ fontSize: '16px', lineHeight: '26px', margin: '16px 0' }}>
                Happy Coding!
                <br />
                The GoBoolean Team
              </p>
              <hr
                style={{
                  width: '100%',
                  border: 'none',
                  borderTop: '1px solid #eaeaea',
                  borderColor: '#cccccc',
                  margin: '20px 0',
                }}
              />
              <p
                style={{
                  fontSize: '12px',
                  lineHeight: '24px',
                  margin: '16px 0',
                  color: '#8898aa',
                }}
              >
                © {new Date().getFullYear()} goboolean.in All rights reserved.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
);
