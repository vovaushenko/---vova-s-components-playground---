import React from 'react';

/**
 *https://www.joshwcomeau.com/snippets/react-components/visually-hidden/
 *@IMPORTANT by pressing ALT the typically-hidden will be displayed, letting you verify that you haven't missed anything. In production this will be stripped away
 *Renders visually hidden component that allows place text inside components for users with screen readers
 *@function VisuallyHidden
 *@param {chilren} ReactNode - wrapped children which will recieve screen reader support
 *@param {rest} rest - other params to be added
 *@returns {JSX.Element} - Rendered VisuallyHidden component
 */
const VisuallyHidden: React.FunctionComponent = ({
  children,
  ...rest
}): JSX.Element => {
  const [forceShow, setForceShow] = React.useState(false);

  const hiddenStyles = {
    display: 'inline-block',
    position: 'absolute',
    overflow: 'hidden',
    clip: 'rect(0 0 0 0)',
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    border: 0,
  } as React.CSSProperties;

  React.useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(true);
        }
      };
      const handleKeyUp = (ev: KeyboardEvent) => {
        if (ev.key === 'Alt') {
          setForceShow(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keydown', handleKeyUp);
      };
    }
  }, []);
  if (forceShow) {
    return <>{children}</>;
  }
  return (
    <span style={hiddenStyles} {...rest}>
      {children}
    </span>
  );
};
export default VisuallyHidden;
