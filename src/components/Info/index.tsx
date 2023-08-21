import Image from "next/image"

import circle from "../../../public/images/circle.png"
import monochromatic from "../../../public/images/mono.png"
import analogous from "../../../public/images/analogous.png"
import complementary from "../../../public/images/complementary.png"
import triadic from "../../../public/images/primary.png"
import splitComplementary from "../../../public/images/split-complementary.png"

import styles from "./inde.css"

const theories = [
  {
    id: 1,
    title: "Monochromatic",
    image: monochromatic,
    description:
      "This scheme uses variations of a single color by adjusting its shades, tints, and tones.",
  },
  {
    id: 2,
    title: "Complementary",
    image: complementary,
    description:
      "Complementary colors are located opposite each other on the color wheel. Using them in a color scheme creates strong contrast and visual impact.",
  },
  {
    id: 3,
    title: "Split Complementary",
    image: splitComplementary,
    description:
      "This scheme involves selecting one base color and then using the two colors adjacent to its complementary color on the color wheel.",
  },
  {
    id: 4,
    title: "Analogous",
    image: analogous,
    description:
      "Analogous color schemes involve selecting colors that are adjacent to each other on the color wheel. These colors create a sense of harmony and unity.",
  },
  {
    id: 5,
    title: "Triadic",
    image: triadic,
    description:
      "Triadic color schemes use three colors that are evenly spaced around the color wheel. This creates a balanced yet vibrant combination.",
  },
]

const Info = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Info</h1>

      <div className={styles.colorTheoryContainer}>
        <h2 className={styles.colorTheoryTitle}>Color Theory</h2>

        <p className={styles.colorTheoryDescription}>
          Color theory, a cornerstone of visual arts and design, explores how
          colors interact, blend, and complement each other to create harmonious
          compositions.
        </p>
        <Image
          src={circle}
          alt="chromatic circle"
          className={styles.colorTheoryImage}
          placeholder="blur"
          blurDataURL={circle.src}
        />
        <p className={styles.colorTheoryDescription}>
          Our project takes a single chosen hue as a starting point and applies
          the principles of color theory to craft complementary, analogous, and
          contrasting color combinations.
        </p>
      </div>

      <hr className={styles.diviser} />

      <div className={styles.theoriesGroup}>
        {theories.map((theory) => (
          <div key={theory.id} className={styles.theoryContainer}>
            <h3 className={styles.theoryTitle}>{theory.title}</h3>

            <Image
              src={theory.image}
              alt={`${theory.title} scheme`}
              className={styles.theoryImage}
              placeholder="blur"
              blurDataURL={theory.image.src}
            />

            <p className={styles.theoryDescription}>{theory.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Info
