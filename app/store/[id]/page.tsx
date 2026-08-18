import React from 'react'

function product() {
    return (
        <div className='grid grid-cols-12 mt-4 shadow-md'>
            <div className='col-span-3 '>
                <img src="https://thumbs.dreamstime.com/b/funny-imge-happy-monkey-taking-selfie-surrounded-bananas-image-created-ai-generative-328552834.jpg" />
            </div>
            <div className='col-span-9 p-4'>
                <h2 className='font-bold'>product name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ullam vero mollitia,
                    ratione ad aspernatur optio ipsa molestias quaerat, sint praesentium ab rem nisi quis
                    quod ea earum expedita asperiores?</p>
                <p className='font-bold'>price: <span>20</span>$</p>
                <div className='pt-5'>
                   <button className='bg-amber-300 rounded px-2'>+</button> 
                   <span className='px-2'>23</span>
                   <button className='bg-amber-300 rounded px-2'>-</button> 
                </div>
            </div>
        </div>
    )
}

export default product