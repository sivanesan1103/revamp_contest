


export const CourseNavigation= ()=>{
    return(
        <>
<div class="flex space-x-4 overflow-x-auto  mx-6 my-2 border-b-4" id="course-tab-navigation " aria-live="off">
    <div class="flex-none">
        <button type="button" id="tab-0" aria-selected="true" role="tab" class="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-blue-600 border-b-2 border-transparent">
            Most popular
        </button>
    </div>
    <div class="flex-none">
        <button type="button" id="tab-1" aria-selected="false" role="tab" class="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-blue-600 border-b-2 border-transparent">
            New
        </button>
    </div>
    <div class="flex-none">
        <button type="button" id="tab-2" aria-selected="false" role="tab" class="px-4 py-2 text-lg font-semibold text-gray-600 hover:text-blue-600 border-b-2 border-transparent">
            Trending
        </button>
    </div>
</div>


        </>
    )
}