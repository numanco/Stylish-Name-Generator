/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useParams } from "react-router-dom";
import { SEO_DATA, DEFAULT_SEO } from "../data/seo";
import Generator from "../components/Generator";
import SEOContent from "../components/SEOContent";
import { useEffect } from "react";

export default function GeneratorPage() {
  const { slug } = useParams();
  const data = slug ? SEO_DATA[slug] || DEFAULT_SEO : DEFAULT_SEO;

  useEffect(() => {
    document.title = data.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", data.description);
  }, [data]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <section className="mb-16 text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{data.h1}</h1>
        <p className="text-black/40 dark:text-white/40 text-sm md:text-base max-w-2xl mx-auto">{data.intro}</p>
      </section>

      <Generator initialName={data.keyword !== "Stylish Name" ? data.keyword : "Your Name"} />

      <SEOContent data={data} />
    </div>
  );
}
