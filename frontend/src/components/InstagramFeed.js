import React from 'react'
import { lifecycle, withState, compose } from 'recompose'
import { isMobile } from 'react-device-detect'

const accessKey = '2209371853.1677ed0.a0152d51f4f4404ca0e0ebfbc6731580'

const InstagramFeed = ({
  images
}) => {
  const imageCount = isMobile ? 4 : 10

  return (
    <div className='container is-clearfix' style={{ padding: 16, marginBottom: 16 }}>
      <div className='columns is-multiline is-gapless-tablet is-mobile'>
        {images.length ? images.slice(0, imageCount).map(image => (
          <div className='column is-one-fifth-tablet is-half-mobile' key={image.id}>
            <a href={image.link} target='_blank' rel='noopener noreferrer'>
              <figure>
                <img
                  height={640}
                  width={640}
                  src={image.images.standard_resolution.url}
                  alt={(image.caption && image.caption.text) ? image.caption.text : image.images.standard_resolution.url}
                  style={{ padding: 2 }}
                />
              </figure>
            </a>
          </div>
        )) : null}
      </div>

      <div className='is-pulled-right'>
        <a href='https://www.instagram.com/aaron_mcpherson_/' target='_blank' rel='noopener noreferrer'>Follow me on Instagram</a>
      </div>
    </div>
  )
}

const enhance = compose(
  withState('images', 'setImages', []),
  lifecycle({
    componentDidMount () {
      fetch(
        'https://api.instagram.com/v1/users/self' +
        '/media/recent/?access_token=' +
        accessKey
      )
      .then(res => res.json())
      .then(res => this.props.setImages(res.data))
    }
  })
)

export default enhance(InstagramFeed)
