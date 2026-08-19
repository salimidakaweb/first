export default function CartItems() {
  return (
    <div className=" pb-2 grid grid-cols-12">
      <img className="rounded col-span-2" src="https://thumbs.dreamstime.com/b/funny-imge-happy-monkey-taking-selfie-surrounded-bananas-image-created-ai-generative-328552834.jpg" alt="" />
      <div className="col-span-10 p-4">
        <h3 className="font-bold">product name</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, atque.</p>
        <p className="font-bold">price: <span>20</span>$</p>
        <div className='pt-5'>
          <button className='bg-amber-300 rounded px-2'>+</button>
          <span className='px-2'>23</span>
          <button className='bg-amber-300 rounded px-2'>-</button>
        </div>
      </div>
    </div>
  );
}

