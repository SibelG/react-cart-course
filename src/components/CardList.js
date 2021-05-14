import React, { Fragment, useState, useEffect } from 'react';

import Card from './Card';

const CardList = ({courses, addToCart}) => {

    const [delay, setDelay] = useState(true)

    useEffect(() => {
        setDelay(true);
        setTimeout(() => {
            setDelay(false)
        }, 1000);
    }, [courses])

    return (
        <Fragment>
            {
                delay ? <img src="https://career.alliedvision.com/persis/images_avt/gicccccphy.gif" alt="loader" className="loader" />
                :
                <div>
                    <span className="courses-length">{courses.length} Course(s) found.</span>
                    <div className="card-list">
                        {
                            courses.length === 0 ? <p className="text-center">Sorry, No courses of the specified categories :-(</p> :
                            courses.map(item => {

                         
                                  return (
                                    
                                    <Card key={item.id} data={item} addToCart={addToCart} />
                                )
                            })
                        }
                    </div>
                </div>
            }
        </Fragment>
    )
}

export default CardList
