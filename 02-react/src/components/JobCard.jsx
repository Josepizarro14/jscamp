function JobCard({ job }) {
    // obtener tags de forma segura: prioriza job.tags, si no existe usa job.data?.technology
    const rawTags = job.tags ?? job.data?.technology ?? []
    const tags = Array.isArray(rawTags) ? rawTags : [rawTags]

    return (
        <article className="job-listing-card">
            <header className="job-card-header">
                <h3 className="job-title">{job.titulo}</h3>
                <p className="job-company">{job.empresa}</p>
            </header>

            <div className="job-card-body">
                <p className="job-location">{job.ubicacion}</p>
                <p className="job-description">{job.descripcion}</p>
            </div>

            <footer className="job-card-footer">
                <span className="job-tags">{tags.join(', ')}</span>
                <button className="btn-button">Aplicar</button>
            </footer>
        </article>
    )
}

export default JobCard