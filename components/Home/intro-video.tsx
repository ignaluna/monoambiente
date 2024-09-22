export function IntroVideo() {
  return (
    <section id='intro' className='mb-16'>
      <div className='aspect-w-16 aspect-h-9 md:aspect'>
        <iframe
          src='https://www.youtube.com/embed/HKHEJdPxkns?si=d2XtdiN6PCizWtUS'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          className='w-full h-full lg:h-screen rounded-lg shadow-lg'
        ></iframe>
      </div>
    </section>
  );
}
