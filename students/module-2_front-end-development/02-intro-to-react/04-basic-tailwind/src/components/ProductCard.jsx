import Image from "../assets/image-product-desktop.jpg";
import Cart from "../assets/icon-cart.svg";

export default function ProductCard() {
  return (
    <div
      className="flex justify-between space-x-3 w-[600px] h-fit rounded-xl overflow-hidden bg-white
      inset-0
      mx-auto
      my-auto
      absolute"
    >
      <figure className="w-fit overflow-hidden">
        <img src={Image} alt="" className="h-[450px] w-auto" />
      </figure>

      <div className=" pr-5 space-y-2 ">
        <p className="font-montserrat pt-7 tracking-[0.25em] text-very-dark-blue">
          PERFUME
        </p>
        <h1 className="font-fraunces font-bold text-[32px] leading-none text-very-dark-blue">
          Gabrielle
          <br /> Essence Eau
          <br /> De Parfum
        </h1>
        <p className="font-montserrat pt-4 text-dark-grayish-blue">
          A floral, solar and voluptuous
          <br /> interpretation composed by
          <br /> Olivier Polge, Perfumer-Creator
          <br /> for the House of CHANEL
        </p>
        <div className="flex items-center gap-5 pt-4 pb-4">
          <span className="font-fraunces text-[32px] font-bold text-dark-cyan">
            $149.99
          </span>{" "}
          <span className="font-montserrat text-[14px] line-through text-dark-grayish-blue">
            $169.99
          </span>
        </div>
        <div className="flex justify-center">
          <button className="bg-dark-cyan p-4 flex justify-center items-center text-white rounded-xl font-medium w-full">
            <img className="mr-4" src={Cart} alt="" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
