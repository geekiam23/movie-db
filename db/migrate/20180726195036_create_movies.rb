class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :tag_line
      t.string :status
      t.integer :runtime
      t.integer :revenue
      t.string :release_date
      t.string :poster_path
      t.integer :popularity
      t.string :overview
      t.integer :budget
      t.boolean :adult

      t.timestamps
    end
  end
end

