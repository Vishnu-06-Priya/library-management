/*card component*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Card({ data }) {

    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${data.colors} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${data.colors} text-uppercase mb-1`}>
                                {data.title}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{data.count}</div>
                        </div>
                        <div class="col-auto">
                            <FontAwesomeIcon icon={data.icon} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
