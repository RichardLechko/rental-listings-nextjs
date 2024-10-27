"use client";

import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return (
    <div>
      {/* <button
        className="block bg-blue-100 p-2"
        onClick={() => router.replace("/")}
      >
        Back to Home
      </button> */}

      {/* use Params */}
      {/* <div>Property Page {params.id}</div> */}

      {/* searchParams */}
      {/* <div>Property Page {searchParams.get("name")}</div> */}

      <div>Property Page {pathname}</div>
    </div>
  );
};

export default PropertyPage;
