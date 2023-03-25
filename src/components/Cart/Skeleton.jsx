import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
   <ContentLoader
      className="section-bottom__column"
      speed={2}
      height={300}
      viewBox="0 0 280 300"
      backgroundColor="#f0f0f0"
      foregroundColor="#dedede"
      {...props}
   >
      <rect x="45" y="20" rx="9" ry="9" width="190" height="136" />
      <rect x="45" y="178" rx="0" ry="0" width="190" height="34" />
      <rect x="45" y="226" rx="0" ry="0" width="85" height="35" />
      <rect x="201" y="226" rx="0" ry="0" width="35" height="35" />
   </ContentLoader>
)

export default Skeleton