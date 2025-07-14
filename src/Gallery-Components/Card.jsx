import React, { useState } from "react";

// Generate 280 dummy image URLs

const cards = [
  // Dummy image URLs (16 cards total)
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/futur3.3_k8chzy.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP4_jndhyw.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939862/future1_1_uu0skg.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP5_jd9oxh.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939863/future1.2_g2s0kn.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/SP7_axkd9t.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s16_fbjlio.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s26_lnsrhd.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s23_wo2ng9.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s24_zd3fmo.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP3_kozjrd.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP1_r5pajf.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s22_gfnzqo.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s18_hrznzi.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s25_xgiz4e.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s20_enowob.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s19_xnuews.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s21_yonnvi.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family4_njqvvr.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s17_jmcw19.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s14_gwel55.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s15_mp52vr.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family3.3_ijxz4t.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s12_lg0por.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s11_znkssw.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fe0e8a76-48a7-49bc-a710-db76f5374454_uybg8w.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s13_pd3qu7.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fiver_tags.txt_torcp3.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/family3_1_ltzuxt.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s10_ftq0mt.jpg",



  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/family3_1_ltzuxt.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939863/future1.2_g2s0kn.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/SP7_axkd9t.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s23_wo2ng9.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/futur3.3_k8chzy.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s26_lnsrhd.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fe0e8a76-48a7-49bc-a710-db76f5374454_uybg8w.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s24_zd3fmo.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s16_fbjlio.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP1_r5pajf.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP3_kozjrd.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s22_gfnzqo.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP5_jd9oxh.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s18_hrznzi.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s25_xgiz4e.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s12_lg0por.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s20_enowob.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s19_xnuews.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family4_njqvvr.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP4_jndhyw.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s21_yonnvi.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s14_gwel55.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s17_jmcw19.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family3.3_ijxz4t.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939862/future1_1_uu0skg.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s15_mp52vr.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s11_znkssw.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s10_ftq0mt.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s13_pd3qu7.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fiver_tags.txt_torcp3.jpg",


  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fiver_tags.txt_torcp3.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939863/future1.2_g2s0kn.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/SP7_axkd9t.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s23_wo2ng9.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s26_lnsrhd.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/futur3.3_k8chzy.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fe0e8a76-48a7-49bc-a710-db76f5374454_uybg8w.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s24_zd3fmo.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP1_r5pajf.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s16_fbjlio.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP3_kozjrd.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP5_jd9oxh.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family3.3_ijxz4t.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s25_xgiz4e.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s18_hrznzi.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s15_mp52vr.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s12_lg0por.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s19_xnuews.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s22_gfnzqo.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s20_enowob.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family4_njqvvr.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP4_jndhyw.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s21_yonnvi.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s17_jmcw19.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s14_gwel55.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939862/future1_1_uu0skg.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/family3_1_ltzuxt.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s11_znkssw.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s10_ftq0mt.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s13_pd3qu7.jpg",
  


  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s23_wo2ng9.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fe0e8a76-48a7-49bc-a710-db76f5374454_uybg8w.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/futur3.3_k8chzy.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP1_r5pajf.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s26_lnsrhd.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s16_fbjlio.jpg",
  "http://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP3_kozjrd.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP5_jd9oxh.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s14_gwel55.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s25_xgiz4e.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s22_gfnzqo.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s12_lg0por.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family4_njqvvr.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s20_enowob.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s18_hrznzi.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939854/s10_ftq0mt.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939859/SP4_jndhyw.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/s13_pd3qu7.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939862/future1_1_uu0skg.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939858/s24_zd3fmo.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s19_xnuews.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s17_jmcw19.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939860/SP7_axkd9t.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/fiver_tags.txt_torcp3.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s11_znkssw.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/family3.3_ijxz4t.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939863/future1.2_g2s0kn.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939855/family3_1_ltzuxt.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939857/s21_yonnvi.jpg",
  "https://res.cloudinary.com/dapozvnbr/image/upload/v1599939856/s15_mp52vr.jpg",
  
  
];



const ITEMS_PER_PAGE = 30;

function Card() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cards.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleCards = cards.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen  p-20">
      {/* Grid of Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        {visibleCards.map((imgUrl, index) => (
          <div key={index} className=" ">
            <img src={imgUrl} alt={`Card ${startIndex + index + 1}`} className="gallaryImg shadow-lg overflow-hidden" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center space-x-2 flex-wrap">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 bg-green-250 py-2 mb-2 rounded-lg font-semibold transition mt-10 ${
              currentPage === i + 1
                ? "gredeint text-gray-700 gredient border border-gray-300  hover:bg-gray-300"
                : "gredient border border-gray-300 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Card;
