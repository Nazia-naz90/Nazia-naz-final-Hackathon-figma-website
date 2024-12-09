import Image from "next/image";
import CardText from "./cards-text";


export default function ProductCard() {
  return (
    <div className="flex  items-center justify-center
    max-w-[90rem] relative
    mx-auto">
    <div className="w-full absolute top-[700px] left-0 
    flex justify-center">
      <div className="w-[1124px] py-[80px] flex flex-col 
      gap-[80px]">
        {/* Text Section */}
        <div className="w-full flex flex-col gap-[10px] justify-center items-center">
          <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {/* image-1 */}
        <div className="w-[238px] h-[615px] mx-auto">
                <div className="w-full h-full">
                  <div className="w-[239px] h-[427px]">
                    <Image src={"/images/product-cover-5.png.jpg"}
                    alt="image"
                    width={239}
                    height={427}
                    className="w-[239px] h-[427px]"></Image>
                  </div>
                  <CardText />
                </div>
        </div>
        {/* image-2 */}
        <div className="w-[238px] h-[615px] mx-auto">
                <div className="w-full h-full">
                  <div className="w-[239px] h-[427px]">
                    <Image src={"/images/product-cover-5 (1).png.jpg"}
                    alt="image"
                    width={239}
                    height={427}
                    className="w-[239px] h-[427px]"></Image>
                  </div>
                  <CardText />
                </div>
       </div>
              {/* image-3 */}
              <div className="w-[238px] h-[615px] mx-auto">
                <div className="w-full h-full">
                  <div className="w-[239px] h-[427px]">
                    <Image src={"/images/product-cover-5 (2).png.jpg"}
                    alt="image"
                    width={239}
                    height={427}
                    className="w-[239px] h-[427px]"></Image>
                  </div>
                  <CardText />
                </div>
              </div>
            {/* image-4 */}
            <div className="w-[238px] h-[615px] mx-auto">
            <div className="w-full h-full">
                  <div className="w-[239px] h-[427px]">
                    <Image src={"/images/product-cover-5 (3).png.jpg"}
                    alt="image"
                    width={239}
                    height={427}
                    className="w-[239px] h-[427px]"></Image>
                  </div>
                  <CardText />
                </div>
              </div>
              {/* image-5 */}
            <div className="w-[238px] h-[615px] mx-auto">
            <div className="w-full h-full">
                  <div className="w-[239px] h-[427px]">
                    <Image src={"/images/productcard-5.png"}
                    alt="image"
                    width={239}
                    height={427}
                    className="w-[239px] h-[427px]"></Image>
                  </div>
                  <CardText />
                </div>
              </div>
            
            {/* image-6 */}
            <div className="w-[238px][615px] mx-auto">
            <div className="w-full h-full">
            <div className="w-[239px] h-[427px]">
            <Image src={"/images/productCard-6.png"}
                    alt="image"
                    width={239}
                    height={427}
                    className="w-[239px] h-[427px]"></Image>
                  </div>
                  <CardText />
                </div>
              </div>
            {/* image-7 */}
            <div className="w-[238px] h-[615px] mx-auto">
            <div className="w-full h-full">
                  <div className="w-[239px] h-[427px]">
                    <Image src={"/images/productcard-7.png"}
                    alt="image"
                    width={239}
                    height={427}
                    className="w-[239px] h-[427px]"></Image>
                  </div>
                  <CardText />
                </div>
              </div>
            {/* image-8 */}
            <div className="w-[238px] h-[615px] mx-auto">
            <div className="w-full h-full">
                  <div className="w-[239px] h-[427px]">
                    <Image src={"/images/productcard-8.png"}
                    alt="image"
                    width={239}
                    height={427}
                    className="w-[239px] h-[427px]"></Image>
                  </div>
                  <CardText />
                </div>
              </div>

        </div>
      </div>
    </div>
    </div>
  );
}