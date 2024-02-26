import React from 'react'
import { motion } from 'framer-motion'
function Profile() {
    return (
        <div>
            <svg width="260" height="260" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
            <svg viewBox="0 0 300 300" width="300" height="300">
  <defs>
    <clipPath id="circleClip">
      <rect x="64.6152" y="44.6154" width="150.769" height="150.769" rx="75.3846" />
    </clipPath>
  </defs>
  <image
    x="64.6152"
    y="44.6154"
    width="150.769"
    height="150.769"
    xlinkHref="profiles.jpg"
    clipPath="url(#circleClip)"
  />
</svg>

                <motion.g
                    transition={{ duration: 12,ease: "linear",repeat: Infinity }}
                    animate={{
                        rotate: 360,
                        
                    }}>
                <path d="M137.891 204V212.282H134.861V204H137.891ZM144.557 204V212.282H141.527V204H144.557Z" fill="white" />
                <path d="M105.845 196.773L102.675 204.425L99.8758 203.265L103.045 195.614L105.845 196.773ZM112.003 199.324L108.834 206.976L106.034 205.816L109.204 198.165L112.003 199.324Z" fill="white" />
                <path d="M79.065 177.859L73.2087 183.715L71.0662 181.572L76.9224 175.716L79.065 177.859ZM83.7785 182.572L77.9223 188.428L75.7798 186.286L81.636 180.43L83.7785 182.572Z" fill="white" />
                <path d="M61.5624 150.135L53.9108 153.305L52.7513 150.505L60.4028 147.336L61.5624 150.135ZM64.1133 156.294L56.4618 159.463L55.3022 156.664L62.9538 153.495L64.1133 156.294Z" fill="white" />
                <path d="M56 117.331H47.718V114.301H56V117.331ZM56 123.997H47.718V120.967H56V123.997Z" fill="white" />
                <path d="M63.2261 85.8447L55.5745 82.6753L56.7341 79.8759L64.3856 83.0453L63.2261 85.8447ZM60.6751 92.0032L53.0236 88.8339L54.1831 86.0345L61.8347 89.2039L60.6751 92.0032Z" fill="white" />
                <path d="M82.1417 59.0646L76.2855 53.2083L78.428 51.0658L84.2843 56.922L82.1417 59.0646ZM77.4282 63.7781L71.5719 57.9219L73.7144 55.7794L79.5707 61.6356L77.4282 63.7781Z" fill="white" />
                <path d="M109.865 41.5616L106.695 33.9101L109.495 32.7505L112.664 40.4021L109.865 41.5616ZM103.706 44.1126L100.537 36.461L103.336 35.3015L106.505 42.9531L103.706 44.1126Z" fill="white" />
                <path d="M142.109 36V27.718L145.139 27.718V36L142.109 36ZM135.443 36V27.718H138.473V36H135.443Z" fill="white" />
                <path d="M174.155 43.2266L177.325 35.5751L180.124 36.7346L176.955 44.3862L174.155 43.2266ZM167.997 40.6757L171.166 33.0241L173.966 34.1836L170.796 41.8352L167.997 40.6757Z" fill="white" />
                <path d="M200.936 62.1414L206.792 56.2851L208.934 58.4277L203.078 64.2839L200.936 62.1414ZM196.222 57.4278L202.078 51.5716L204.221 53.7141L198.364 59.5704L196.222 57.4278Z" fill="white" />
                <path d="M218.438 89.8646L226.089 86.6952L227.249 89.4946L219.597 92.6639L218.438 89.8646ZM215.887 83.706L223.538 80.5366L224.698 83.336L217.046 86.5054L215.887 83.706Z" fill="white" />
                <path d="M224 122.669H232.282V125.699H224V122.669ZM224 116.003H232.282V119.033H224V116.003Z" fill="white" />
                <path d="M216.774 154.155L224.425 157.325L223.266 160.124L215.614 156.955L216.774 154.155ZM219.325 147.997L226.976 151.166L225.817 153.966L218.165 150.796L219.325 147.997Z" fill="white" />
                <path d="M197.859 180.935L203.715 186.792L201.572 188.934L195.716 183.078L197.859 180.935ZM202.572 176.222L208.429 182.078L206.286 184.221L200.43 178.364L202.572 176.222Z" fill="white" />
                <path d="M170.135 198.438L173.305 206.09L170.505 207.25L167.336 199.598L170.135 198.438ZM176.294 195.887L179.463 203.539L176.664 204.699L173.495 197.047L176.294 195.887Z" fill="white" />
                </motion.g>
            </svg>

        </div>
    )
}

export default Profile