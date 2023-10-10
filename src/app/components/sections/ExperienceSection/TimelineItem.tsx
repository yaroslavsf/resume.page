import { ITimelineItem } from "../../interface/ITimelineItem";

const TimelineItem = (props: ITimelineItem) => {
    return (
                <li className="relative mb-6 lg:mb-0 lg:h-full">
                    <div className="flex items-center">
                        <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                            <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </div>
                        <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                    </div>
                    <div className="mt-3 sm:pr-8">
                        <h3 className="text-lg font-semibold text-gray-200 dark:text-white">{props.title}</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{props.date}</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          {props.children}
                        </p>
                    </div>
                </li>
    )
}

export default TimelineItem;