export default function IWVideo() {
  return (
    <section className="w-full px-2 py-10 z-10 flex flex-col items-center justify-center relative">
      <article className="flex items-center justify-center">
        <video
          controls
          className="w-9/12 rounded-xl"
          src="https://s3.interactiveworkers.com/demo/ee6cfa06-b65b-4335-9ee7-dc54f214ba09.mp4"
        ></video>
      </article>
    </section>
  );
}
