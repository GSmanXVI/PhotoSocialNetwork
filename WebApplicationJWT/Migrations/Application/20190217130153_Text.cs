using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplicationJWT.Migrations.Application
{
    public partial class Text : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Posts",
                newName: "Text");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Text",
                table: "Posts",
                newName: "Title");
        }
    }
}
