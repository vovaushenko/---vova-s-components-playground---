import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  variant: 'full-viewport-bg' | 'card-image';
}

const NextImage: React.FunctionComponent<Props> = ({
  variant,
}): JSX.Element => {
  return (
    <>
      {variant === 'full-viewport-bg' && (
        <FullViewportWrapper>
          <Image
            src="/assets/toronto.jpg"
            layout="fill"
            objectFit="cover"
            alt="Mesmerizing Toronto"
          />
        </FullViewportWrapper>
      )}

      {variant === 'card-image' && (
        <Card>
          <Image
            src="/assets/toronto.jpg"
            // just put the original width and height of the original image, in order to provide the right aspect ratio
            // Next.js will automatically reduce the size if the rendered image needs to be smaller.
            width={1920}
            height={1280}
            layout="responsive"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card`s content.
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

const FullViewportWrapper = styled.section`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Card = styled.article`
  width: 20rem;
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.gray.card};

  .card-body {
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

export default NextImage;
