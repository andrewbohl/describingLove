"""baseline

Revision ID: 9fca72029053
Revises: 
Create Date: 2020-07-03 15:52:10.956598

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9fca72029053'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('user',
        sa.Column('id', sa.Integer(), primary_key=True),
        sa.Column('name', sa.String()),
        sa.Column('email', sa.String(), unique=True, nullable=False),
        sa.Column('password', sa.String(), nullable=False),
        sa.Column('permissions', sa.String(), default="User"),
        sa.Column('createdAt', sa.DateTime(), default=sa.func.now()),
        sa.Column('updatedAt', sa.DateTime(), default=sa.func.now())
    )
    op.create_table(
        'post',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('title', sa.String()),
        sa.Column('description', sa.String(), nullable=False),
        sa.Column('postAuthor', sa.Integer(), sa.ForeignKey('user.id'), nullable=False),
        sa.Column('createdAt', sa.DateTime(), default=sa.func.now()),
        sa.Column('updatedAt', sa.DateTime(), default=sa.func.now())
        )


def downgrade():
    pass
