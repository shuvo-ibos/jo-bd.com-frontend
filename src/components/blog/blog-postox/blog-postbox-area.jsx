
import BlogSidebar from "./blog-sidebar";
import BlogItem from "./blog-item";
import Pagination from "@/ui/Pagination";

async function getProducts(apiUrl) {
 try {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/${apiUrl}`);
  const response = await fetch(url.toString(), {
      cache: 'no-store',
  });

  if (!response.ok) {
      return [];
  }
  const data = await response.json();
  return data ;
 } catch (error) {
  console.log(error)
  return {

  }
 }
}

const BlogPostboxArea = async ({query}) => {

  const { apiUrl } = query
  const result = await getProducts(apiUrl);


  return (
    <section className="tp-postbox-area pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="tp-postbox-wrapper pr-50">
              {result?.docs?.length > 0 ? (
                result?.docs?.map((item) => <BlogItem key={item._id} item={item} />)
              ) : (
                <p>No blogs found.</p>
              )}

              <div className="tp-blog-pagination mt-50">
                <div className="tp-pagination">
                  <Pagination
                    currPage={result.page}
                    totalPages={result.totalPages}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPostboxArea;
