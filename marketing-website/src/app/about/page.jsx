import AboutPageClient from './AboutPageClient'

export const metadata = {
  title: "About Us - Mera Halwai",
  description: "Learn about Mera Halwai's mission to connect customers with trusted halwais and catering services. Discover our story, values, and commitment to quality sweets and catering.",
  keywords: ["about mera halwai", "our story", "halwai platform", "catering services", "company mission"],
  openGraph: {
    title: "About Us - Mera Halwai",
    description: "Learn about Mera Halwai's mission to connect customers with trusted halwais and catering services.",
    url: "https://www.merahalwai.com/about",
  },
  alternates: {
    canonical: "https://www.merahalwai.com/about",
  },
};

const page = () => {
  return <AboutPageClient />
}

export default page