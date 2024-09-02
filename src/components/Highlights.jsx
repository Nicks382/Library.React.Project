import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Highlight from './ui/Highlight'
const Hightlights = () => {

    return (
        <section id="highlights">
            <div className="container">
                <h2 className="section__title">
                    Why choose <span className="purple">Library</span>
                </h2>
                <div className="row">
                    <div className="highlight__wrapper">
                        <Highlight
                            icon={<FontAwesomeIcon icon = "bolt" />}
                            title="Easy and Quick"
                            text="Get access to the book you purchased online instantly."
                        />
                         <Highlight
                            icon={<FontAwesomeIcon icon = "book-open" />}
                            title="10,000+ Books"
                            text="Library has books in all your favorite categories."
                        />
                         <Highlight
                            icon={<FontAwesomeIcon icon = "tags" />}
                            title="Affordable"
                            text="Get access to the book you purchased online instantly."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hightlights