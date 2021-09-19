import React from 'react';
import * as Styled from './GridTextLayout.styles';

/**
 *Renders layout with constrained space for text and full space for some components
 *@function GridTextLayout
 *@returns {JSX.Element} - Rendered GridTextLayout component
 */
const GridTextLayout = (): JSX.Element => {
  return (
    <Styled.Container>
      <h1>Some Heading</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga fugiat
        illo ipsum minus, nam nihil ullam voluptas? Ab aperiam, at consectetur
        doloribus eligendi est et facilis hic, optio praesentium reiciendis,
        temporibus ullam veritatis vero voluptate. Ab at autem beatae blanditiis
        dicta dolorem harum magni minus, nihil numquam officia possimus qui quis
        recusandae repellendus sit veniam?
      </p>
      <img
        className="full-bleed"
        alt="cute meerkat"
        src={'/assets/meerkat.jpg'}
      />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        error, incidunt ipsam ipsum modi molestiae nemo non nulla odio
        similique? Adipisci nobis odit reiciendis repudiandae ullam! Ad alias
        aliquam asperiores at dolor, fugiat fugit illum impedit incidunt libero
        necessitatibus non nulla obcaecati quam, quos, recusandae repellat
        reprehenderit sint tempora voluptas. Accusantium aliquid amet aperiam
        asperiores atque aut consectetur debitis dignissimos doloribus ea eos
        eum, excepturi exercitationem, harum hic id illo iure modi molestiae
        nemo nihil optio perferendis placeat quaerat quas, qui quis quod
        recusandae sunt tenetur vero vitae voluptatem voluptatibus. Blanditiis,
        consequatur illum labore possimus quam qui sint. Dicta inventore ipsum
        sint velit veniam. Accusamus, alias aperiam architecto assumenda beatae
        blanditiis cumque distinctio dolor eos est et eveniet fugit illum libero
        maxime non officiis perspiciatis praesentium quam quidem quos repellat
        similique totam ullam veniam. Alias aut, doloremque doloribus eos
        excepturi fugit quaerat ullam veritatis voluptate. Eos optio repellat
        soluta temporibus.
      </p>
      <img
        className="full-bleed"
        alt="cute meerkat"
        src={'/assets/meerkat.jpg'}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        error, incidunt ipsam ipsum modi molestiae nemo non nulla odio
        similique? Adipisci nobis odit reiciendis repudiandae ullam! Ad alias
        aliquam asperiores at dolor, fugiat fugit illum impedit incidunt libero
        necessitatibus non nulla obcaecati quam, quos, recusandae repellat
        reprehenderit sint tempora voluptas. Accusantium aliquid amet aperiam
        asperiores atque aut consectetur debitis dignissimos doloribus ea eos
        eum, excepturi exercitationem, harum hic id illo iure modi molestiae
        nemo nihil optio perferendis placeat quaerat quas, qui quis quod
        recusandae sunt tenetur vero vitae voluptatem voluptatibus. Blanditiis,
        consequatur illum labore possimus quam qui sint. Dicta inventore ipsum
        sint velit veniam. Accusamus, alias aperiam architecto assumenda beatae
        blanditiis cumque distinctio dolor eos est et eveniet fugit illum libero
        maxime non officiis perspiciatis praesentium quam quidem quos repellat
        similique totam ullam veniam. Alias aut, doloremque doloribus eos
        excepturi fugit quaerat ullam veritatis voluptate. Eos optio repellat
        soluta temporibus.
      </p>
    </Styled.Container>
  );
};

export default GridTextLayout;
