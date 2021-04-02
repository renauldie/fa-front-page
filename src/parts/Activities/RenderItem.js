import React from "react";

import Link from "next/link";

export default function RenderItem({ item }) {
  return (
    <div className="w-full md:w-1/4 px-4 mb-6">
      <div className="item relative">
        <figure className="item-image">
          <img
            src={item?.thumbnail ?? ""}
            alt={item?.name ?? "some information"}
          />
        </figure>
        <div className="item-meta mt-2">
          <h4 className="text-lg text-gray-900">
            {item?.name ?? "Event name"}
          </h4>
          <h5 className="text-sm text-gray-600">
            {item?.status ?? "Event status"}
          </h5>
        </div>
        <Link href="/courses/[id]" as={`/courses/${item.id}`}>
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
}
