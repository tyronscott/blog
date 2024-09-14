import { css } from "hono/css";

export function Footer() {
  return (
    <footer class={sFooter}>
      <div id="copyright">
        <span>© {new Date().getFullYear()} tyronscott</span>
      </div>
    </footer>
  );
}

const sFooter = css`
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 7vh;
`;
