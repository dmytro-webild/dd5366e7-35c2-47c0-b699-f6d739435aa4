"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import BlogCardThree from '@/components/sections/blog/BlogCardThree';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Palette, Star, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="largeSmall"
        background="blurBottom"
        cardStyle="solid"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "Gallery",
          id: "#gallery",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "Blog",
          id: "#blog",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Artisan Canvas"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "radial-gradient",
      }}
      title="Discover Masterpieces for Your Collection"
      description="Explore a curated selection of original paintings from talented artists. Find the perfect piece that speaks to your soul and elevates your space."
      tag="Hand-Painted Originals"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "View Gallery",
          href: "#gallery",
        },
        {
          text: "Request Commission",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/multicolored-paint-brush-strokes-surface_23-2148815523.jpg",
          imageAlt: "Vibrant abstract oil painting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pool-water_74190-1778.jpg",
          imageAlt: "Serene landscape watercolor painting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/watercolour-paint-stains-wallpaper_1409-2647.jpg",
          imageAlt: "watercolour paint stains wallpaper",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/roughly-painted-acrylic-rainbow-white-background_23-2148079268.jpg",
          imageAlt: "Roughly painted acrylic rainbow on a white background",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/colorful-textured-background-wallpaper-abstract-acrylic-painting_53876-176807.jpg",
          imageAlt: "Colorful textured background wallpaper, abstract acrylic painting",
        },
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by Collectors Worldwide"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Clara Monet",
          name: "Abstract Expression",
          price: "$1,200",
          rating: 5,
          reviewCount: "12 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-splashes-colorful-watercolor-paintbrush_23-2148801992.jpg",
          imageAlt: "Portrait painting",
        },
        {
          id: "p2",
          brand: "Ethan Van Gogh",
          name: "Geometric Harmony",
          price: "$950",
          rating: 5,
          reviewCount: "8 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/acrylic-paint-textured-background-pink-abstract-style-creative-art_53876-134253.jpg",
          imageAlt: "Abstract geometric painting",
        },
        {
          id: "p3",
          brand: "Sophia Picasso",
          name: "Still Life Serenity",
          price: "$780",
          rating: 5,
          reviewCount: "15 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/combination-autumn-fruits-platters-blue-surface_114579-70258.jpg",
          imageAlt: "Still life painting",
        },
        {
          id: "p4",
          brand: "Liam Rembrandt",
          name: "Urban Reflections",
          price: "$1,500",
          rating: 5,
          reviewCount: "9 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/red-yellow-building-reflecting-lake_181624-6197.jpg",
          imageAlt: "Cityscape painting",
        },
        {
          id: "p5",
          brand: "Olivia Da Vinci",
          name: "Botanical Dreams",
          price: "$620",
          rating: 4,
          reviewCount: "20 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-vineyard-door-golden-hour_23-2152030803.jpg",
          imageAlt: "Floral watercolor painting",
        },
        {
          id: "p6",
          brand: "Noah Pollock",
          name: "Cosmic Drift",
          price: "$1,800",
          rating: 5,
          reviewCount: "6 reviews",
          imageSrc: "http://img.b2bpic.net/free-photo/mixed-wallpaper-background-vector-abstract-textured-art_53876-134361.jpg",
          imageAlt: "Abstract expressionism painting",
        },
      ]}
      title="Our Latest Artworks"
      description="Browse our newest arrivals, spanning various styles and subjects. Each piece is an original, ready to inspire."
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="Our Passion for Art & Curation"
      metrics={[
        {
          icon: Palette,
          label: "Years Curating",
          value: "15+",
        },
        {
          icon: Users,
          label: "Artists Featured",
          value: "80+",
        },
        {
          icon: Star,
          label: "Satisfied Collectors",
          value: "500+",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      negativeCard={{
        items: [
          "Mass-produced prints lacking soul",
          "Limited selection from unknown artists",
          "Questionable quality, fading over time",
          "No personal connection or story",
        ],
      }}
      positiveCard={{
        items: [
          "Original, unique, hand-painted art",
          "Extensive curated collection of talents",
          "Premium archival quality materials",
          "Direct connection to artist's vision",
        ],
      }}
      title="Why Choose Artisan Canvas"
      description="We offer an unparalleled experience for art lovers and collectors, focusing on authenticity, quality, and passion."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "A True Treasure for My Home!",
          quote: "The painting I received from Artisan Canvas is simply breathtaking. It perfectly captures the essence I was looking for and has become the centerpiece of my living room. The quality is exceptional, and the ordering process was seamless.",
          name: "Sarah J.",
          role: "Art Collector",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-hispanic-woman-wearing-casual-sweater-happy-face-smiling-with-crossed-arms-looking-camera-positive-person_839833-7483.jpg",
          imageAlt: "Sarah J.",
        },
        {
          id: "t2",
          title: "Exceptional Service and Stunning Artwork",
          quote: "I've purchased several pieces from Artisan Canvas, and each experience has been fantastic. The team is incredibly helpful, and the artists featured are truly gifted. Highly recommend for anyone looking for authentic art.",
          name: "Michael D.",
          role: "Interior Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-confident-man-looking-photographer_23-2148398473.jpg",
          imageAlt: "Michael D.",
        },
        {
          id: "t3",
          title: "My Favorite Online Art Gallery",
          quote: "As an artist myself, I appreciate the dedication to genuine artistry that Artisan Canvas embodies. Their selection is inspiring, and I proudly display my new painting. A truly wonderful platform for both artists and collectors.",
          name: "Emily R.",
          role: "Artist & Enthusiast",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-yellow-day-concept_23-2148483104.jpg",
          imageAlt: "Emily R.",
        },
        {
          id: "t4",
          title: "Found the Perfect Piece!",
          quote: "I had been searching for a unique abstract piece for months, and Artisan Canvas delivered! The artwork exceeded my expectations, and the detailed descriptions made me confident in my purchase.",
          name: "David K.",
          role: "First-time Buyer",
          imageSrc: "http://img.b2bpic.net/free-photo/black-creative-person-using-pencil-draw-vase-design-canvas-easel-workshop-space-home-african-american-artist-drawing-modern-masterpiece-successful-fine-art-hobby_482257-33994.jpg",
          imageAlt: "David K.",
        },
        {
          id: "t5",
          title: "Highly Professional and Curated",
          quote: "Artisan Canvas provides a refreshing experience in the online art market. Their curation is impeccable, ensuring that every piece is a worthwhile investment. My latest acquisition is a conversation starter!",
          name: "Jessica M.",
          role: "Gallery Owner",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-woman-distance-learning-working-from-home-with-laptop-making-notes-student_1258-255240.jpg",
          imageAlt: "Jessica M.",
        },
      ]}
      title="Voices of Our Collectors"
      description="Hear what our delighted clients have to say about their Artisan Canvas experience, from discovery to delivery."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do you ensure the authenticity of the paintings?",
          content: "Every painting featured on Artisan Canvas is an original work directly from the artist. We work closely with our artists and provide certificates of authenticity with each purchase.",
        },
        {
          id: "q2",
          title: "What is your shipping policy for artwork?",
          content: "We offer secure, insured shipping worldwide. Paintings are professionally packaged to prevent damage, and tracking information is provided for all orders. Shipping costs and estimated delivery times vary by destination.",
        },
        {
          id: "q3",
          title: "Do you accept custom commission requests?",
          content: "Yes, many of our artists are available for custom commissions. Please use our contact form to submit your request, including details about your vision, preferred artist (if any), size, and style. We'll connect you with the right talent.",
        },
        {
          id: "q4",
          title: "What is your return policy?",
          content: "We want you to be absolutely delighted with your art. If you're not satisfied, you may return the artwork within 14 days of receipt for a full refund or exchange, provided it is in its original condition. Please see our full terms for details.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about purchasing, shipping, and unique aspects of buying art through Artisan Canvas."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Art Insights & Inspiration"
      description="Delve into the world of art with our insightful articles, artist spotlights, and tips for collecting."
      blogs={[
        {
          id: "b1",
          category: "Artist Spotlight",
          title: "Meet Elara Vance: The Master of Light",
          excerpt: "Discover the unique techniques and inspirations behind Elara Vance's luminous landscape paintings.",
          imageSrc: "http://img.b2bpic.net/free-photo/artist-apron-posing-with-easel-canvas_23-2148372218.jpg",
          imageAlt: "Artist painting in her studio",
          authorName: "Artisan Canvas Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/supportive-attractive-adult-redhead-male-with-bristle-liking-great-plan-raising-hands-showing-thumbs-up-smiling-joyfully_176420-27569.jpg",
          date: "July 12, 2024",
        },
        {
          id: "b2",
          category: "Collecting Tips",
          title: "Starting Your Art Collection: A Beginner's Guide",
          excerpt: "Expert advice on how to begin your journey as an art collector, from finding your style to proper display.",
          imageSrc: "http://img.b2bpic.net/free-photo/white-headed-fruit-pigeon-carpophaga-leucomela-illustrated-by-elizabeth-gould_53876-65210.jpg",
          imageAlt: "Books on art history and a painting",
          authorName: "Art Historian",
          authorAvatar: "http://img.b2bpic.net/free-photo/diy-activity-online-content-craft-creation_23-2151515946.jpg",
          date: "June 28, 2024",
        },
        {
          id: "b3",
          category: "Art Trends",
          title: "The Resurgence of Abstract Expressionism",
          excerpt: "Explore why abstract expressionism is making a comeback and how it continues to influence contemporary artists.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-going-art-gallery_23-2149709092.jpg",
          imageAlt: "Modern abstract painting in a gallery",
          authorName: "Guest Contributor",
          authorAvatar: "http://img.b2bpic.net/free-photo/contemplated-serious-young-man-looking-camera_23-2148130297.jpg",
          date: "June 10, 2024",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Connect With Us"
      description="Have a question about a painting, a custom commission request, or just want to say hello? Reach out to our team."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message",
        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-paint-materiales_23-2148013041.jpg"
      imageAlt="Art studio with painting supplies"
      mediaAnimation="slide-up"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Explore",
          items: [
            {
              label: "Gallery",
              href: "#gallery",
            },
            {
              label: "Artists",
              href: "#",
            },
            {
              label: "Blog",
              href: "#blog",
            },
          ],
        },
        {
          title: "About",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Contact Us",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQs",
              href: "#faq",
            },
            {
              label: "Shipping & Returns",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Artisan Canvas"
      copyrightText="© 2024 Artisan Canvas. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
