/** @jsxImportSource @emotion/react */
import "twin.macro";

export const Navigation: React.FC = ({ children }) => (
  <nav>
    <ul tw="flex flex-col">{children}</ul>
  </nav>
);
