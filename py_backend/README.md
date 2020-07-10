Changes to datamodel
cd database
make changes to models.py
run 'alembic revision --autogenerate -m "revisionName"'
alembic upgrade --sql (revision_from):(revision_to)
or alembic upgrade head to automatically apply changes


Running the backend
