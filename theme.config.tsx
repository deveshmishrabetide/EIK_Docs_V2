import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DocsThemeConfig } from "nextra-theme-docs";
import icon from "./images/epicgames.ico";
import { Analytics } from "@vercel/analytics/react"

const config: DocsThemeConfig = {
  logo: (
    <>
      <div style={{ width: '34px', height: '34px' }}>
      <svg 
      version="1.1"
      id="svg2"
      width="34"
      height="34"
      viewBox="0 0 682 791" // Adjust the viewBox as necessary
      xmlns="http://www.w3.org/2000/svg" >
        <path
          fill="#ffffff"
          d="M 52.00,1.07
           C 52.00,1.07 108.00,1.07 108.00,1.07
             108.00,1.07 214.00,1.07 214.00,1.07
             214.00,1.07 540.00,1.07 540.00,1.07
             540.00,1.07 570.00,1.07 570.00,1.07
             570.00,1.07 595.00,1.07 595.00,1.07
             620.82,1.00 656.45,-2.71 672.90,22.00
             675.63,26.11 677.86,31.28 679.28,36.00
             681.25,42.55 681.99,47.18 682.00,54.00
             682.00,54.00 682.00,621.00 682.00,621.00
             681.99,630.59 680.30,640.87 674.90,649.00
             667.65,659.91 656.56,664.88 645.00,669.85
             645.00,669.85 609.00,684.99 609.00,684.99
             609.00,684.99 435.00,757.85 435.00,757.85
             435.00,757.85 381.00,780.42 381.00,780.42
             369.55,785.23 360.72,790.98 348.00,791.00
             348.00,791.00 332.00,791.00 332.00,791.00
             321.84,790.87 310.33,784.30 301.00,780.28
             301.00,780.28 246.00,757.28 246.00,757.28
             246.00,757.28 61.00,679.72 61.00,679.72
             44.14,672.45 17.67,664.70 7.55,649.00
             1.85,640.16 0.02,627.37 0.00,617.00
             0.00,617.00 0.00,308.00 0.00,308.00
             0.00,308.00 0.00,57.00 0.00,57.00
             0.03,38.92 6.49,18.75 23.00,9.34
             32.81,3.75 41.23,2.99 52.00,1.07 Z
           M 58.00,10.07
           C 48.11,11.71 39.38,11.64 30.00,16.38
             13.63,24.64 9.03,44.12 9.00,61.00
             9.00,61.00 9.00,314.00 9.00,314.00
             9.00,314.00 9.00,612.00 9.00,612.00
             9.02,622.36 10.44,636.44 16.63,645.00
             21.26,651.39 28.12,654.86 35.00,658.24
             35.00,658.24 73.00,674.28 73.00,674.28
             73.00,674.28 252.00,749.28 252.00,749.28
             252.00,749.28 309.00,773.20 309.00,773.20
             319.78,777.56 327.96,782.86 340.00,783.00
             353.97,783.15 361.50,778.31 374.00,773.00
             374.00,773.00 423.00,752.42 423.00,752.42
             423.00,752.42 602.00,677.42 602.00,677.42
             602.00,677.42 643.00,660.28 643.00,660.28
             650.98,656.84 660.78,652.32 665.90,644.96
             672.06,636.11 672.37,627.24 673.09,617.00
             673.09,617.00 674.00,605.00 674.00,605.00
             674.00,605.00 674.00,317.00 674.00,317.00
             674.00,317.00 674.00,69.00 674.00,69.00
             673.98,54.79 671.89,33.83 661.70,23.17
             651.46,12.46 632.18,10.02 618.00,10.07
             618.00,10.07 246.00,10.07 246.00,10.07
             246.00,10.07 122.00,10.07 122.00,10.07
             122.00,10.07 58.00,10.07 58.00,10.07 Z
           M 580.00,286.00
           C 580.00,286.00 580.00,352.00 580.00,352.00
             579.97,368.11 577.42,388.31 564.96,399.82
             549.80,413.82 523.47,413.22 504.00,413.00
             504.00,413.00 495.00,412.17 495.00,412.17
             482.34,410.94 471.08,409.75 461.00,400.82
             448.71,389.92 445.02,372.80 445.00,357.00
             445.00,357.00 445.00,162.00 445.00,162.00
             445.02,146.20 448.71,129.08 461.00,118.18
             470.38,109.87 482.00,107.75 494.00,106.91
             514.92,105.45 546.28,103.47 563.00,118.18
             575.28,128.99 578.93,146.24 579.00,162.00
             579.00,162.00 579.00,224.00 579.00,224.00
             579.00,224.00 533.00,224.00 533.00,224.00
             533.00,224.00 533.00,167.00 533.00,167.00
             532.93,161.50 532.05,156.21 527.87,152.22
             521.13,145.80 502.57,146.27 496.22,153.11
             491.96,157.70 492.01,162.18 492.00,168.00
             492.00,168.00 492.00,322.00 492.00,322.00
             492.00,322.00 492.00,353.00 492.00,353.00
             492.09,360.23 493.97,366.06 501.00,369.43
             505.17,371.43 511.38,371.05 516.00,371.00
             530.78,370.82 533.98,362.08 534.00,349.00
             534.00,349.00 534.00,286.00 534.00,286.00
             534.00,286.00 580.00,286.00 580.00,286.00 Z
           M 103.00,109.00
           C 103.00,109.00 206.00,109.00 206.00,109.00
             206.00,109.00 206.00,152.00 206.00,152.00
             206.00,152.00 150.00,152.00 150.00,152.00
             150.00,152.00 150.00,235.00 150.00,235.00
             150.00,235.00 204.00,235.00 204.00,235.00
             204.00,235.00 204.00,278.00 204.00,278.00
             204.00,278.00 150.00,278.00 150.00,278.00
             150.00,278.00 150.00,367.00 150.00,367.00
             150.00,367.00 207.00,367.00 207.00,367.00
             207.00,367.00 207.00,410.00 207.00,410.00
             207.00,410.00 103.00,410.00 103.00,410.00
             103.00,410.00 103.00,109.00 103.00,109.00 Z
           M 228.00,109.00
           C 228.00,109.00 304.00,109.00 304.00,109.00
             317.62,109.16 332.89,113.26 342.56,123.29
             352.14,133.22 355.84,149.54 356.00,163.00
             356.00,163.00 356.00,245.00 356.00,245.00
             355.98,259.53 352.72,277.26 341.83,287.70
             324.44,304.37 296.24,301.00 274.00,301.00
             274.00,301.00 274.00,410.00 274.00,410.00
             274.00,410.00 228.00,410.00 228.00,410.00
             228.00,410.00 228.00,109.00 228.00,109.00 Z
           M 375.00,109.00
           C 375.00,109.00 422.00,109.00 422.00,109.00
             422.00,109.00 422.00,410.00 422.00,410.00
             422.00,410.00 375.00,410.00 375.00,410.00
             375.00,410.00 375.00,109.00 375.00,109.00 Z
           M 274.00,260.00
           C 285.59,260.00 304.35,263.40 308.24,249.00
             309.02,246.09 308.99,243.95 309.00,241.00
             309.00,241.00 309.00,178.00 309.00,178.00
             309.00,170.35 310.37,159.04 303.79,153.65
             297.64,148.61 281.96,150.00 274.00,150.00
             274.00,150.00 274.00,260.00 274.00,260.00 Z
           M 191.00,520.00
           C 191.00,520.00 191.00,554.00 191.00,554.00
             191.00,556.36 191.22,559.61 189.98,561.68
             186.97,566.69 171.82,572.71 166.00,574.10
             142.47,579.74 115.32,571.20 104.90,548.00
             103.14,544.08 102.44,540.19 101.75,536.00
             97.87,512.26 110.43,489.50 134.00,482.44
             146.27,478.76 162.22,479.00 174.00,484.31
             179.88,486.97 182.86,489.36 188.00,493.00
             185.78,497.78 181.15,503.01 177.57,506.98
             176.11,508.61 174.35,510.70 172.00,510.90
             168.71,511.16 165.76,507.16 159.00,505.05
             146.31,501.11 134.14,507.61 129.56,520.00
             125.25,531.65 131.06,544.72 142.00,550.32
             147.88,553.33 161.16,554.51 164.98,547.87
             166.27,545.62 166.00,541.59 166.00,539.00
             166.00,539.00 148.00,539.00 148.00,539.00
             148.00,539.00 148.00,520.00 148.00,520.00
             148.00,520.00 191.00,520.00 191.00,520.00 Z
           M 514.00,543.00
           C 519.85,544.19 524.54,547.82 530.00,550.13
             535.10,552.27 550.93,556.11 553.60,548.91
             555.98,542.49 541.06,539.64 537.00,538.63
             525.36,535.72 510.74,532.07 506.80,519.00
             505.81,515.73 505.96,511.43 506.00,508.00
             506.36,478.17 543.97,476.37 565.00,484.23
             571.12,486.52 573.67,488.45 579.00,492.00
             579.00,492.00 567.00,511.00 567.00,511.00
             561.20,509.62 558.31,507.01 553.00,504.93
             549.15,503.42 542.02,501.62 538.02,502.82
             534.31,503.92 531.07,506.93 534.36,510.61
             537.63,514.28 549.00,516.34 554.00,517.63
             570.91,521.98 581.22,528.12 581.00,547.00
             580.63,578.68 538.50,579.12 517.00,570.37
             511.23,568.02 506.25,564.28 501.00,561.00
             501.00,561.00 514.00,543.00 514.00,543.00 Z
           M 198.00,574.00
           C 198.00,574.00 207.58,549.00 207.58,549.00
             207.58,549.00 227.40,502.00 227.40,502.00
             227.40,502.00 236.70,481.99 236.70,481.99
             236.70,481.99 242.00,481.00 242.00,481.00
             242.00,481.00 254.00,481.00 254.00,481.00
             254.00,481.00 261.30,481.99 261.30,481.99
             261.30,481.99 270.58,502.00 270.58,502.00
             270.58,502.00 291.20,551.00 291.20,551.00
             291.20,551.00 300.00,574.00 300.00,574.00
             300.00,574.00 280.00,574.00 280.00,574.00
             277.94,574.00 274.39,574.26 272.70,573.01
             270.08,571.07 266.61,560.38 266.00,557.00
             266.00,557.00 241.00,557.00 241.00,557.00
             241.00,557.00 233.22,558.02 233.22,558.02
             233.22,558.02 224.50,572.98 224.50,572.98
             224.50,572.98 218.00,574.00 218.00,574.00
             218.00,574.00 198.00,574.00 198.00,574.00 Z
           M 308.00,482.00
           C 308.00,482.00 329.00,482.00 329.00,482.00
             337.36,482.06 336.42,483.07 342.68,493.00
             342.68,493.00 357.00,516.00 357.00,516.00
             357.00,516.00 371.19,492.00 371.19,492.00
             375.01,485.76 375.27,482.13 383.00,482.00
             383.00,482.00 405.00,482.00 405.00,482.00
             405.00,482.00 405.00,574.00 405.00,574.00
             405.00,574.00 379.00,574.00 379.00,574.00
             379.00,574.00 379.00,542.00 379.00,542.00
             379.00,542.00 378.00,524.00 378.00,524.00
             375.99,529.26 367.52,541.72 364.00,547.00
             361.08,551.38 359.79,554.51 355.00,557.00
             355.00,557.00 334.00,525.00 334.00,525.00
             334.00,525.00 334.00,574.00 334.00,574.00
             334.00,574.00 308.00,574.00 308.00,574.00
             308.00,574.00 308.00,482.00 308.00,482.00 Z
           M 421.00,482.00
           C 421.00,482.00 495.00,482.00 495.00,482.00
             495.00,482.00 495.00,504.00 495.00,504.00
             495.00,504.00 447.00,504.00 447.00,504.00
             447.00,504.00 447.00,517.00 447.00,517.00
             447.00,517.00 490.00,517.00 490.00,517.00
             490.00,517.00 490.00,538.00 490.00,538.00
             490.00,538.00 447.00,538.00 447.00,538.00
             447.00,538.00 447.00,551.00 447.00,551.00
             447.00,551.00 496.00,551.00 496.00,551.00
             496.00,551.00 496.00,574.00 496.00,574.00
             496.00,574.00 421.00,574.00 421.00,574.00
             421.00,574.00 421.00,482.00 421.00,482.00 Z
           M 249.00,514.00
           C 246.20,517.91 240.88,532.14 240.00,537.00
             240.00,537.00 258.00,537.00 258.00,537.00
             258.00,537.00 249.00,514.00 249.00,514.00 Z
           M 211.00,680.00
           C 211.00,680.00 395.00,680.00 395.00,680.00
             395.00,680.00 448.00,680.00 448.00,680.00
             448.00,680.00 473.00,681.00 473.00,681.00
             473.00,681.00 442.00,691.67 442.00,691.67
             442.00,691.67 378.00,712.67 378.00,712.67
             378.00,712.67 352.00,721.33 352.00,721.33
             352.00,721.33 338.00,724.64 338.00,724.64
             338.00,724.64 312.00,716.00 312.00,716.00
             312.00,716.00 259.00,697.81 259.00,697.81
             259.00,697.81 225.00,686.05 225.00,686.05
             225.00,686.05 211.00,680.00 211.00,680.00 Z"
        />
      </svg>
      </div>
      <span style={{ marginLeft: ".4em", fontWeight: 1000, marginTop: ".4en" }}>
        EOS Integration Kit
      </span>
    </>
  ),
  project: {
    link: "https://github.com/betidestudio/EOSIntegrationKit",
  },
  banner: {
    key: '4.1-release',
    text: (
      <a href="https://www.unrealengine.com/marketplace/en-US/product/eos-integration-kit" target="_blank">
        🎉 EOS Integration Kit Version 4 released this month!
      </a>
    ),
  },
  chat: {
    link: "https://discord.gg/betidestudio",
  },
  docsRepositoryBase: "https://github.com/deveshmishrabetide/EIK_Docs_V2",
  footer: {
    text: "Epic, Epic Games, Epic Games Store, the Epic Games Store logo, and Epic Online Services are trademarks and/or registered trademarks of Epic Games. All other trademarks are the property of their respective owners. ",
  },
  head: (
    <>
      <link rel="icon" type="image/x-icon" href={icon.src} />
    </>
  ),
  useNextSeoProps() {
    
    return { titleTemplate: "%s – Betide Studio" };
  },
};

export default config;
