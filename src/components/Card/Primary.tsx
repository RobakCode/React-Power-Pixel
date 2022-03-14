/** @jsxImportSource @emotion/react */
import "twin.macro";

export const CardPrimary: React.FC = ({ children }) => (
  <div tw="flex flex-1 flex-col p-6 rounded-md bg-white" style={{ boxShadow: "0px 0px 20px rgba(215, 222, 227, 0.4)" }}>
    {children}
  </div>
);
