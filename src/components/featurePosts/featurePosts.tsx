import React, { FunctionComponent } from "react";
import { PostSnippet } from "../../types";

export interface FeaturePosts {
  featurePosts: PostSnippet[];
}

export const FeaturePost: FunctionComponent<PostSnippet> = ({
  title,
  summary,
  href,
  img,
  imgAlt,
  tags,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <a href={href}>
          <img
            className="h-48 w-full object-cover"
            src={img}
            alt={imgAlt || title}
          />
        </a>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            {tags.map(({ label, href: tagHref }, index) => (
              <span key={index}>
                <a href={tagHref} className="hover:underline">
                  {label}
                </a>{" "}
              </span>
            ))}
          </p>
          <a href={href} className="block">
            <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
              {title}
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">{summary}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export const FeaturePosts: FunctionComponent<FeaturePosts> = ({
  featurePosts,
}) => {
  return (
    <div className="relative py-6">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-2xl leading-9 tracking-tight font-semibold text-gray-900 sm:leading-10 text-center mt-4 mb-12 hidden">
          Featured Posts
        </h2>
        <div className="mt-3 grid gap-5 xl:gap-10 max-w-lg mx-auto grid-cols-1 md:grid-cols-3 md:max-w-none">
          {featurePosts.map((featurePost, index) => (
            <FeaturePost {...featurePost} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};