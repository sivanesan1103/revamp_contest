function FooterSection () {
    return (
        <div class="bg-gray-100 py-10">
            <div class="container mx-auto px-6 md:px-12 lg:px-10">
                <div class="flex flex-wrap justify-between">
                
                
                <div class="w-full md:w-1/4 mb-8 md:mb-0">
                    <img src="your-logo-url.png" alt="Educal" class="h-10 mb-4" />
                    <p class="text-gray-600 mr-8">
                    Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.
                    </p>
                    <div class="flex space-x-4 mt-4">
                    <a href="#" class="text-blue-600"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="text-blue-400"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-red-500"><i class="fab fa-pinterest"></i></a>
                    </div>
                </div>
                
                
                <div class="w-full md:w-1/4 mb-8 md:mb-0">
                    <h3 class="font-bold text-gray-800 mb-4">Company</h3>
                    <ul class="space-y-2">
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Courses</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Events</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Instructor</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Career</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Become a Teacher</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
                    </ul>
                </div>

                
                <div class="w-full md:w-1/4 mb-8 md:mb-0">
                    <h3 class="font-bold text-gray-800 mb-4">Platform</h3>
                    <ul class="space-y-2">
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Browse Library</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Library</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Partners</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">News & Blogs</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">FAQs</a></li>
                    <li><a href="#" class="text-gray-600 hover:text-gray-900">Tutorials</a></li>
                    </ul>
                </div>

                
                <div class="w-full md:w-1/4">
                    <h3 class="font-bold text-gray-800 mb-4">Subscribe</h3>
                    <form class="flex items-center">
                    <input type="email" class="w-full px-4 py-2 border rounded-md focus:outline-none" placeholder="Your email address" />
                    </form>
                    <p class="text-gray-600 mt-4">
                    Get the latest news and updates right at your inbox.
                    </p>
                </div>
                </div>

                <div class="mt-8 text-center">
                    <div>
                        <p class="text-gray-400 text-sm">
                            © {<script>document.write(new Date().getFullYear())</script>} Website Designed By
                            <a href="https://www.linkedin.com/in/sivanesan-k03/" class="text-blue-500 hover:underline" target="_blank"> Sivanesan</a> and
                            <a href="https://www.linkedin.com/in/dhayananthgs" class="text-blue-500 hover:underline" target="_blank"> Dhayananth</a>
                        </p>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default FooterSection;