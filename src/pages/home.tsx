import { css } from "hono/css";
import { BlogPosts } from "../components/BlogPosts";
import { $getBlogPosts } from "../../data";

export async function Home() {
  const posts = await $getBlogPosts();
  return (
    <>
      <div class={sTitleContainer}>
        <h1 class={sTitle}>hi! i'm ts :D</h1>
        <p>
          sometimes a developer, mostly just brainrot. i'll be trying to write about things i find interesting. (atleast for me D:)
        </p>
        {/* <br></br>
        <Socials /> */}
      </div>
      <div class={sBlogContainer}>
        <h2>blog</h2>
        <BlogPosts posts={posts} />
      </div>
    </>
  );
}

export const HomeMeta = {
  title: "home",
  description: "ty's Homepage",
};

const sTitle = css`
  letter-spacing: -0.02em;
`;

const sTitleContainer = css`
  margin-top: 4em;
  margin-bottom: 4em;
`;

const sBlogContainer = css`
  margin-top: 2em;
`;
