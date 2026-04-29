import Blog from "../models/Blog.js";



const generateSlug = (title) => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "") 
        .replace(/\s+/g, "-"); 
};

export const createBlog = async (req, res) => {
    try {
       const { title, content, author, date, category } = req.body;
        const image = req.file ? req.file.path : "";

        if (!title || !content) {
            return res.status(400).json({ error: "Title and content are required" });
        }

        let slug = generateSlug(title);

        // ✅ ensure uniqueness
        let existing = await Blog.findOne({ slug });
        let count = 1;

        while (existing) {
            slug = `${generateSlug(title)}-${count}`;
            existing = await Blog.findOne({ slug });
            count++;
        }

        const blog = await Blog.create({
            title,
            content,
            image,
            author,
            date,
            category,
            slug,
        });

        res.status(201).json(blog);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to create blog" });
    }
};
/* GET ALL BLOGS */
export const getBlogs = async (req, res) => {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
};





export const getBlogBySlug = async (req, res) => {
    try {
        const blog = await Blog.findOne({ slug: req.params.slug });

        if (!blog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        res.json(blog);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch blog" });
    }
};





/* DELETE BLOG */
export const deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
};






export const getCategories = async (req, res) => {
    try {
        const categories = await Blog.aggregate([
            {
                $group: {
                    _id: "$category",
                    count: { $sum: 1 },
                },
            },
            {
                $project: {
                    name: "$_id",
                    count: 1,
                    _id: 0,
                },
            },
            {
                $sort: { count: -1 },
            },
        ]);

        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};