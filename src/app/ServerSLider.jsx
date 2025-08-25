import JewelryBanner from "@/components/banner/jewelry-banner";

async function getAlbum() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/slider/slider_data?type=slider`, {
        next: { revalidate: 10 },
      });

    if (!response.ok) {
        return [];
    }
    const data = await response.json();
    return data ;
  }

export default async function ServerSLider() {
    const result = await getAlbum();
  return (
    <div>
         <JewelryBanner slider_result={result}/>
    </div>
  )
}
