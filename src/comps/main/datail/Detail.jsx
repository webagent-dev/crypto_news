import React from 'react'
import './detail.css'
import HtmlPaeser from 'html-react-parser'
import millify from 'millify'
import { useParams } from 'react-router-dom'
import Detailmarkup from './other/Detailmarkup'

function Detail() {
    const { id } = useParams()
    return (
        <div className='detail__container'>
            <div className="detail__wrapper">
            <div className="detail__markup__header">
                    <h1>Lorem (ipsum dolorsit) amet.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, delectus explicabo ea vel eveniet repellat.</p>
                </div>
                <select>
                    <option value="one">1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                </select>
                <div className="detail__grid">
                    <div className="grid__item__one">
                        <h2>let get this thing done</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, id!</p>
                        <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                    </div>
                    <div className="grid__item__two">
                    <h2>let get this thing done</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, id!</p>
                        <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                    </div>
                </div>
                <div className="detail__grid">
                <div className="grid__item__one">
                    <h1>what is BitCoin</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro accusamus facere nemo dolorum. Earum debitis placeat dignissimos at et sunt illo sed? Consequatur laborum placeat repellendus velit. Quaerat repellendus quia numquam vitae, officiis, ut aspernatur doloremque suscipit soluta, deserunt aliquam.</p>
                    <h1>this another text file</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ut, assumenda eius sapiente delectus, ullam harum voluptate officiis quasi nam odio ex, fugit praesentium magni sunt dolores aliquam quis incidunt! Similique fugiat ipsa sed qui laudantium magnam doloribus rerum, asperiores eos magni provident consequuntur corporis animi ea possimus accusamus est veritatis ad ab, blanditiis ex dolorum. Perspiciatis nihil quasi aliquid?</p>
                    <h1>this another text file</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ut, assumenda eius sapiente delectus, ullam harum voluptate officiis quasi nam odio ex, fugit praesentium magni sunt dolores aliquam quis incidunt! Similique fugiat ipsa sed qui laudantium magnam doloribus rerum, asperiores eos magni provident consequuntur corporis animi ea possimus accusamus est veritatis ad ab, blanditiis ex dolorum. Perspiciatis nihil quasi aliquid?</p>
                    <h1>this another text file</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ut, assumenda eius sapiente delectus, ullam harum voluptate officiis quasi nam odio ex, fugit praesentium magni sunt dolores aliquam quis incidunt! Similique fugiat ipsa sed qui laudantium magnam doloribus rerum, asperiores eos magni provident consequuntur corporis animi ea possimus accusamus est veritatis ad ab, blanditiis ex dolorum. Perspiciatis nihil quasi aliquid?</p>
                    <h1>this another text file</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ut, assumenda eius sapiente delectus, ullam harum voluptate officiis quasi nam odio ex, fugit praesentium magni sunt dolores aliquam quis incidunt! Similique fugiat ipsa sed qui laudantium magnam doloribus rerum, asperiores eos magni provident consequuntur corporis animi ea possimus accusamus est veritatis ad ab, blanditiis ex dolorum. Perspiciatis nihil quasi aliquid?</p>
                    <h1>this another text file</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ut, assumenda eius sapiente delectus, ullam harum voluptate officiis quasi nam odio ex, fugit praesentium magni sunt dolores aliquam quis incidunt! Similique fugiat ipsa sed qui laudantium magnam doloribus rerum, asperiores eos magni provident consequuntur corporis animi ea possimus accusamus est veritatis ad ab, blanditiis ex dolorum. Perspiciatis nihil quasi aliquid?</p>
                    <h1>this another text file</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ut, assumenda eius sapiente delectus, ullam harum voluptate officiis quasi nam odio ex, fugit praesentium magni sunt dolores aliquam quis incidunt! Similique fugiat ipsa sed qui laudantium magnam doloribus rerum, asperiores eos magni provident consequuntur corporis animi ea possimus accusamus est veritatis ad ab, blanditiis ex dolorum. Perspiciatis nihil quasi aliquid?</p>
                    <h1>this another text file</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ut, assumenda eius sapiente delectus, ullam harum voluptate officiis quasi nam odio ex, fugit praesentium magni sunt dolores aliquam quis incidunt! Similique fugiat ipsa sed qui laudantium magnam doloribus rerum, asperiores eos magni provident consequuntur corporis animi ea possimus accusamus est veritatis ad ab, blanditiis ex dolorum. Perspiciatis nihil quasi aliquid?</p>
                </div>
                    <div className="grid__item__two">
                        <h1>Bitcoin Links</h1>
                      <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                    </div>
                </div>
                <div className="detail__grid">
                <div className="grid__item__one"></div>
                    <div className="grid__item__two">
                    <div className="grid__item__two">
                        <h1>Bitcoin Links</h1>
                      <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                        <Detailmarkup />
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Detail
