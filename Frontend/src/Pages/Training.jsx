import React from 'react'

const Training = () => {
  const videos = [
    {
      id: 1,
      title: 'JavaScript Tutorial For Beginners',
      image: 'https://i.ytimg.com/vi/PbpYtmTe5o4/hqdefault.jpg',
      link: 'https://www.youtube.com/embed/uC9VtVnuPD0',
      pdf: 'https://drive.google.com/uc?export=download&id=1Yf3NQvJX4703Q9uQbFUv5ZWoD6SqwM7U',

    },
    {
      id: 2,
      title: 'React JS Tutorial For Beginners',
      image: 'https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg',
      link: 'https://www.youtube.com/embed/Ke90Tje7VS0',
      pdf: 'https://drive.google.com/uc?export=download&id=1cZiKJi7q_xb0B8K5K8kJr7KLkMmW39Kk',

    },
    {
      id: 3,
      title: 'CSS Tutorial For Beginners',
      image: 'https://i.ytimg.com/vi/kUMe1FH4CHE/hqdefault.jpg',
      link: 'https://www.youtube.com/embed/kUMe1FH4CHE?si=vTLbH2ADCckqUkcZ',
      pdf: 'https://drive.google.com/uc?export=download&id=1QjhI6J0RRnQhzcS5fz-G6g_OqF7p3hXS',

    },
  ]

  return (
    <div className="container" style={{ width: '50%', margin: '0 auto' }}>
      <div className="card-container">

        <h2 className="text-center pt-4">Training Page</h2>
        <hr />

        <div className="row">
          {videos.map(video => (
            <div key={video.id} className="col-md-4">
              <YouTubeVideoCard
                title={video.title}
                channel={video.channel}
                views={video.views}
                image={video.image}
                link={video.link}
              />
              <PdfCard
                title={video.title}
                pdf={video.pdf}
              />
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const YouTubeVideoCard = ({ title, channel, views, image, link }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{channel}</p>
        <p className="card-text">{views}</p>
      </div>
      <iframe
        width="100%"
        height="145"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />

    </div>
  )
}
const PdfCard = ({ title }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
          <a href="https://happyperformer.com/pdf/JS%20pdf%20description.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Study Material</a>
      </div>
    </div>
  )
}
export default Training
