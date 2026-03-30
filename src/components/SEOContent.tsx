/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SEOPageData } from "../data/seo";

interface SEOContentProps {
  data: SEOPageData;
}

export default function SEOContent({ data }: SEOContentProps) {
  return (
    <div className="mt-20 space-y-16 border-t border-black/10 dark:border-white/5 pt-20">
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Top {data.keyword} Styles</h2>
        <p className="text-black/60 dark:text-white/60 leading-relaxed">{data.intro}</p>
      </section>

      <section className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-2xl font-bold text-center">How to Create {data.keyword}</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Enter Name", desc: "Type your text in the generator box above." },
            { step: "2", title: "Choose Style", desc: "Browse through 100+ unique Unicode styles." },
            { step: "3", title: "Click Copy", desc: "Click the copy icon to save to your clipboard." },
            { step: "4", title: "Paste Anywhere", desc: "Paste in Free Fire, PUBG, or social media." }
          ].map((item) => (
            <div key={item.step} className="bg-white dark:bg-[#111111] p-6 rounded-2xl border border-black/10 dark:border-white/5 text-center space-y-2 shadow-sm">
              <div className="w-8 h-8 bg-[#1A1A1A] dark:bg-white dark:text-black text-white rounded-full flex items-center justify-center mx-auto text-xs font-bold">{item.step}</div>
              <h3 className="font-bold text-sm">{item.title}</h3>
              <p className="text-[10px] text-black/40 dark:text-white/40 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-2xl mx-auto space-y-8 pb-20">
        <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {data.faqs.map((faq, i) => (
            <div key={i} className="bg-white dark:bg-[#111111] p-6 rounded-2xl border border-black/10 dark:border-white/5 space-y-2 shadow-sm">
              <h3 className="font-bold text-sm flex gap-2">
                <span className="text-[#F27D26]">Q:</span> {faq.q}
              </h3>
              <p className="text-sm text-black/60 dark:text-white/60 pl-6">
                <span className="font-bold text-[#1A1A1A] dark:text-white mr-2">A:</span> {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
