import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb(props) {
    return (
        <div>
            <ol className="list-reset flex font-medium">
                {props.items.map((item, index) => (
                    <>
                        {item.link && (
                            <>
                                <li>
                                    <Link
                                        to={item.link}
                                        className="text-indigo-700 transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                                <li>
                                    <span className="mx-2 text-neutral-500 dark:text-neutral-400">
                                        /
                                    </span>
                                </li>
                            </>
                        )}
                        {!item.link && <li>{item.name}</li>}
                    </>
                ))}
            </ol>
        </div>
    );
}

export default BreadCrumb;
