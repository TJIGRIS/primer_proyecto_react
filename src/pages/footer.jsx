import React from "react";
import { row, rsocialf, rsocialg, rsociall, rsocialt, rsocialw } from "../assets";

export const Footer = () => {
  return (
    <div className="bg-[#26292e] mt-[10rem] ">
      <section className="container mx-auto  lg:p-0 lg:py-16 p-4  py-16">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 sm:text-left text-center">
            <div className="text-white/40">
              <h2 className="text-white">Marketplace</h2>
              <p>All NFT's</p>
              <p>Art</p>
              <p>Music</p>
              <p>Domain Names</p>
              <p>Virtual World</p>
              <p>Collections</p>
            </div>
            <div className="text-white/40">
              <h2 className="text-white">Resources</h2>
              <p>Help Center</p>
              <p>Parners</p>
              <p>Suggestions</p>
              <p>Discord</p>
              <p>Docs</p>
              <p>Newplatter</p>
            </div>
            <div className="text-white/40">
              <h2 className="text-white">Community</h2>
              <p>Community</p>
              <p>Documentation</p>
              <p>Brand Assets</p>
              <p>Blog</p>
              <p>Forum</p>
              <p>Malin list</p>
            </div>
            <div className="text-white/40 flex flex-col gap-2">
              <h2 className="text-white">Newsletter</h2>
              <p>
                Signup for our newletters to get the latest news in your inbox
              </p>
              <div className="relative flex flex-row bg-[#3b3e45] overflow-hidden rounded-full" >
                <input className="w-full bg-transparent p-2 outline-none" placeholder="enter your email" type="text" />
                <div className="absolute w-10 rotate-[270deg] bg-[#3e407f] top-[50%] right-[-1.2rem] translate-x-[-50%] translate-y-[-50%]">
                  <img className="w-full h-full" src={row} alt="" />
                </div>
              </div>
              <p>You email sale wit us. We don't span</p>
            </div>
          </div>
        </div>
      </section>

      <div className=" box-shadow3">
        <div className="container mx-auto text-white/40 flex sm:justify-between items-center py-6 flex-wrap gap-6 justify-center">
          <p>@Copyright &copy; Original by POsdfd</p>
          <h2>www.DounloadeNewThe.xom</h2>
          <div className="grid grid-cols-5 place-items-center  gap-2">
            <div className="bg-[#3e407f] p-2 w-10 h-10 rounded-lg">
              <img src={rsocialf} alt="" />
            </div>
            <div className="bg-[#3e407f] p-2 w-10 h-10 rounded-lg">
              <img src={rsocialg} alt="" />
            </div>
            <div className="bg-[#3e407f] p-2 w-10 h-10 rounded-lg">
              <img src={rsociall} alt="" />
            </div>
            <div className="bg-[#3e407f] p-2 w-10 h-10 rounded-lg">
              <img src={rsocialt} alt="" />
            </div>
            <div className="bg-[#3e407f] p-2 w-10 h-10 rounded-lg">
              <img src={rsocialw} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
